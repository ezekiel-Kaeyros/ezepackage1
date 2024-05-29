import React, { FC, FormEvent, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Root, TextareaContainer } from './style';
import { Avatar } from '../../ui';
import axios from 'axios';
import { useNotifications } from '../../../utils';
import { NotificationType } from '../../../constants/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { MentionsInput, Mention } from 'react-mentions';
import mentionsInputStyle from './mentionsInputStyle';



// const queryCreateComment = '/comments/create'
// const queryCreateCommentReply = '/comments/:commentId/reply/:authorId';

const createComment = async ({ comment, postId }) => {
  const newComment = await axios.post('/comments/create', { comment, postId });
  return newComment.data;
};
const createCommentReply = async ({comment_id, comment, postId, userId }) => {
  const newComment = await axios.post(`/comments/${comment_id}/reply/${userId}`, { comment, postId });
  return newComment.data;
};


const fetchUsers = async () => {
  const users = await axios.get('/users/get-users');
  return users;
};

interface CommentCreateProps {
  autoFocus?: boolean;
  post: any;
  queryKey: any;
  type?: string
 
  id?:string
}

const CommentCreate: FC<CommentCreateProps> = ({ autoFocus, post, queryKey, type ,id}) => {
  const authUser = useSelector((state: RootState) => state.auth.user);
  
  const [comment, setComment] = useState('');
  const { mutateAsync: createCommentMutation } = useMutation(createComment);
  const { mutateAsync: createCommentReplyMutation } = useMutation(createCommentReply);
  const queryClient = useQueryClient();
  const { createNotification } = useNotifications();

  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setComment(value);
  };

  const onEnterPress = async (e) => {
    // alert('ok')
    if (e.key === 'Enter') {
      
      e.preventDefault();

      if (!comment.trim()) {
        return;
      }

     if (!type || type!=="reply") {
       try {
         const newComment = await createCommentMutation({ comment, postId: post._id });

         queryClient.setQueryData(queryKey, (existingPosts: any) => {
           if (!existingPosts.pages) {
             return {
               ...existingPosts,
               comments: [...existingPosts.comments, newComment],
             };
           }

           return {
             ...existingPosts,
             pages: existingPosts.pages.map((posts) => {
               return posts.map((p) => {
                 if (p._id === post._id) {
                   return {
                     ...p,
                     comments: [...p.comments, newComment],
                   };
                 } else {
                   return p;
                 }
               });
             }),
           };
         });
         //  dispatch(refeshPost(true));
         createNotification({
           user: post.author,
           postId: post._id,
           notificationType: NotificationType.COMMENT,
           notificationTypeId: newComment._id,
           queryKey,
         });

         setComment('');
       } catch (error) {
         console.error('An error occurred while creating a comment: ', error);
       }
     } else {
       
       
       
        try {
          const newComment = await createCommentReplyMutation({ comment_id: id, comment, postId: post._id, userId:authUser._id });
          console.log('newComment',newComment);
           queryClient.setQueryData(queryKey, (existingPosts: any) => {
             if (!existingPosts.pages) {
               return {
                 ...existingPosts,
                 comments: [...existingPosts.comments, newComment],
               };
             }

             return {
               ...existingPosts,
               pages: existingPosts.pages.map((posts) => {
                 return posts.map((p) => {
                   if (p._id === post._id) {
                     return {
                       ...p,
                       comments: [...p.comments, newComment],
                     };
                   } else {
                     return p;
                   }
                 });
               }),
             };
           });
           //  dispatch(refeshPost(true));
           createNotification({
             user: post.author,
             postId: post._id,
             notificationType: NotificationType.COMMENT,
             notificationTypeId: newComment._id,
             queryKey,
           });

           setComment('');
          // queryClient.setQueryData(queryKey, (existingPosts: any) => {
          //   if (!existingPosts.pages) {
          //       const commentArray = existingPosts.comments.map((item) => {
          //         if (item._id == id) {
          //           item.replies.push(newComment);
          //         }
          //         return item;
          //       });
             

          //     return {
          //       ...existingPosts,
          //       comments: [...commentArray],
          //     };
          //   }

          //   return {
          //     ...existingPosts,
          //     pages: existingPosts.pages.map((posts) => {
          //       return posts.map((p) => {
          //         if (p._id === post._id) {
                      
          //           const commentArray = p.comments.map((item) => {
          //               if (item._id==id) {
          //                  item.replies.push(newComment);
          //               }
          //             return item
          //             });
                     
          //           return {
          //             ...p,
          //             comments: [...commentArray],
          //           };
          //         } else {
          //           return p;
          //         }
          //       });
          //     }),
          //   };
          // });
         
          // createNotification({
          //   user: post.author,
          //   postId: post._id,
          //   notificationType: NotificationType.COMMENT,
          //   notificationTypeId: newComment._id,
          //   queryKey,
          // });

          // setComment('');
        } catch (error) {
          console.error('An error occurred while creating a comment: ', error);
        }
       
     }
    }
  };

  // Fetching users

  const { data } = useQuery({ queryFn: fetchUsers, queryKey: ['users'] });

  const usersData = data?.data?.map((user) => ({ id: user._id, display: user.fullName }));
  return (
    <Root>
      <Avatar image={authUser?.image} />

      <TextareaContainer>
        {/* Mentions input */}

        <MentionsInput
          placeholder="Write a comment..."
          onKeyDown={onEnterPress}
          style={mentionsInputStyle}
          value={comment}
          autoFocus={true}
          onChange={handleChange}
        >
          <Mention
            style={{ backgroundColor: '#cee4e5' }}
            displayTransform={(id, display) => `@${display}`}
            trigger="@"
            data={usersData}
          />
        </MentionsInput>
      </TextareaContainer>
    </Root>
  );
};

export default CommentCreate;
