import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from 'react-query';
import debounce from 'lodash/debounce';
import { openAuthPopup, PopupType } from '../../store/auth';
import { LikeIcon } from '../ui/icons';
import Spacing from '../ui/Spacing';
import { RootState } from '../../store';
import { useNotifications } from '../../utils';
import { NotificationType } from '../../constants/Notification';
import { Button } from '../ui/Button';

const createLike = async ({ postId }) => {
  const like = await axios.post('/likes/create', { postId });
  return like.data;
};
const createLikeComment = async ({ commentId }) => {
  const like = await axios.post('/likes/comment', { commentId });
  return like.data;
};

const deleteLike = async (id: string) => {
  const like = await axios.delete('/likes/delete', { data: { id } });
  return like.data;
};

interface LikeProps {
  withText?: boolean;
  fullWidth?: boolean;
  post: any;
  hasLiked: any;
  queryKey: any;
  type?: string;
  id?: any;
  islike?: string;
  likes?: any;
  likeHandler?: any;
  likeHandler2?: any;
  arrayLikes?: any
  updateLikes?:any
}

const StyledButton = styled(Button)`
  padding: ${(p) => p.theme.spacing.xs};
`;

const Like: FC<LikeProps> = ({
  withText,
  fullWidth,
  hasLiked,
  post,
  queryKey,
  type,
  id,
  islike,
  likes,
  likeHandler,
  likeHandler2,
  arrayLikes,
  updateLikes
}) => {
  const [isBlue,setIsBlue]=useState(id)
  const dispatch = useDispatch();
  const authUser = useSelector((state: RootState) => state.auth.user);
  const color = hasLiked  ? 'primary' : 'textSecondary';
  const queryClient = useQueryClient();
  const { createNotification, deleteNotification } = useNotifications();
  const [checkLike, setCheckLike] = useState('');
  const { mutateAsync: createLikeMutation } = useMutation(createLike);
  const { mutateAsync: createLikeCommentMutation } = useMutation(createLikeComment);
  const { mutateAsync: deleteLikeMutation } = useMutation(deleteLike);
console.log('hfgkhgnfhgnf hjgfhjg',id);

  const updateAfterLike = (like) => {
    if (!type) {
      queryClient.setQueryData(queryKey, (existingPosts: any) => {
        if (!existingPosts.pages) {
          return {
            ...existingPosts,
            likes: [like, ...existingPosts.likes],
          };
        }

        return {
          ...existingPosts,
          pages: existingPosts.pages.map((posts) => {
            return posts.map((p) => {
              if (p._id === post._id) {
                return {
                  ...p,
                  likes: [like, ...p.likes],
                };
              } else {
                return p;
              }
            });
          }),
        };
      });
    } else {
      // alert('yes');

      queryClient.setQueryData(queryKey, (existingPosts: any) => {
        if (!existingPosts.pages) {
          //  alert('yes2')
          const comments = existingPosts.comments.map((item) => {
            if (item._id == checkLike) {
              item.likes.push(like);
              //  alert('feux1')
              //  console.log('item5', item);
              //  row = {
              //    ...item,
              //    likes: [like, ...item.likes],
              //  };
              //  console.log('row',row);
            }
            return item;
          });
          return {
            ...existingPosts,
            comments: [...comments],
          };
        }
        //  alert('yes5')
        return {
          ...existingPosts,
          pages: existingPosts.pages.map((posts) => {
            return posts.map((p) => {
              if (p._id === post._id) {
                const comments = p.comments.map((item) => {
                  //  let row = item;
                  if (item._id == checkLike) {
                    //  alert('feux2');
                    //  console.log('item',item);
                    item.likes.push(like);
                    //  row = {
                    //    ...item,
                    //    likes: [like,...item.likes],
                    //  };
                    //    console.log('row', row);
                  }
                  return item;
                  //  return row;
                });

                return {
                  ...p,
                  comments: [...comments],
                };
              } else {
                return p;
              }
            });
          }),
        };
      });
      setCheckLike('');
      setIsBlue(true);
      updateLikes(2);

    }
  };

  const updateAfterUnLike = (likeId) => {
    if (!type) {
      queryClient.setQueryData(queryKey, (existingPosts: any) => {
        if (!existingPosts.pages) {
          return {
            ...existingPosts,
            likes: existingPosts.likes.filter((like) => like._id !== likeId),
          };
        }

        return {
          ...existingPosts,
          pages: existingPosts.pages.map((posts) => {
            return posts.map((p) => {
              if (p._id === post._id) {
                return {
                  ...p,
                  likes: p.likes.filter((like) => like._id !== likeId),
                };
              } else {
                return p;
              }
            });
          }),
        };
      });
    } else {
      // alert(likeId);

      queryClient.setQueryData(queryKey, (existingPosts: any) => {
        console.log('existingPosts',existingPosts);
        
        if (!existingPosts.pages) {
          const comments = existingPosts.comments.map((item: any) => {
            let row = item;
            if (item._id == checkLike) {
              const arraylikes = item.likes.filter((items2: any) => items2 !== likeId);
              delete item.likes;
              row = {
                ...item,
                likes: arraylikes,
              };
              console.log('row', row);
            }
            return row;
          });
          return {
            ...existingPosts,
            comments: [...comments],
          };
        }

        return {
          ...existingPosts,
          pages: existingPosts.pages.map((posts) => {
            return posts.map((p) => {
              if (p._id === post._id) {
                const comments = p.comments.map((item) => {
                  let row = item;
                  if (item._id == checkLike) {
                    const arraylikes = item.likes.filter((items2: any) => items2 !== likeId);
                    delete item.likes;
                    row = {
                      ...item,
                      likes: arraylikes,
                    };
                    console.log('row', row);
                  }
                  return row;
                });

                return {
                  ...p,
                  comments: [...comments],
                };
              } else {
                return p;
              }
            });
          }),
        };
      });
      setCheckLike('');
      likeHandler2();
      setIsBlue(false)
      updateLikes(1)
    }
  };

  const likeMutation = async () => {
    try {
      const like = hasLiked ? await deleteLikeMutation(hasLiked?._id) : await createLikeMutation({ postId: post._id });
      hasLiked ? updateAfterUnLike(like._id) : updateAfterLike(like);

      if (hasLiked) {
        const notification = post.author.notifications.find((n) => n?.like?._id === hasLiked?._id);
        if (notification) {
          deleteNotification({ id: notification._id, postId: post._id, user: post.author, queryKey });
        }
      } else {
        createNotification({
          user: post.author,
          postId: post._id,
          notificationType: NotificationType.LIKE,
          notificationTypeId: like._id,
          queryKey,
        });
      }
    } catch (error) {
      console.error('Error while trying to crate or delete a like', error);
    }
  };

  const likeCommentMutation = async () => {
    console.log('hasLiked12365', hasLiked);

    try {
      const like = hasLiked
        ? await deleteLikeMutation(hasLiked?.id)
        : await createLikeCommentMutation({ commentId: checkLike });
      console.log('like._id', like._id);
      console.log('hasLiked', hasLiked);
      // alert('ok')
      // updateAfterUnLike(like._id);
      hasLiked ? updateAfterUnLike(like._id) : updateAfterLike(like._id);
      // if (hasLiked) {
      //   const notification = post.author.notifications.find((n) => n?.like?._id === hasLiked?._id);
      //   if (notification) {
      //     deleteNotification({ id: notification._id, postId: post._id, user: post.author, queryKey });
      //   }
      // } else {
      //   createNotification({
      //     user: post.author,
      //     postId: post._id,
      //     notificationType: NotificationType.LIKE,
      //     notificationTypeId: like._id,
      //     queryKey,
      //   });
      // }
    } catch (error) {
      console.error('Error while trying to crate or delete a like', error);
    }
  };

  useEffect(() => {
    //  alert(checkLike);
    if (islike) {
      //  alert(islike);

      likeHandler();
      setCheckLike(islike);
    }

    if (checkLike !== '' && type) {
      likeCommentMutation();
      setCheckLike('');
    }
  }, [checkLike, type, islike]);

  const openAuthModal = () => {
    dispatch(openAuthPopup(PopupType.Sign_Up));
  };

  return (
    <>
      {!type && (
        <StyledButton
          onClick={debounce(authUser ? likeMutation : openAuthModal, 200)}
          fullWidth={fullWidth}
          radius="none"
          text
          size="xs"
          weight="bold"
          color={color}
        >
          <LikeIcon color={color} hasLiked={hasLiked} />
          {withText && <Spacing left="xxs">Like</Spacing>}
        </StyledButton>
      )}

      {type && (
        // <StyledButton
        //   onClick={debounce(authUser ? likeMutation : openAuthModal, 200)}
        //   fullWidth={fullWidth}
        //   radius="none"
        //   text
        //   size="xs"
        //   weight="bold"
        //   color={color}
        // >
        <>
          {' '}
          {likes && (
            <div>
              <LikeIcon color={color} hasLiked={isBlue} />
            </div>
          )}
          {/* {withText && <Spacing left="xxs">Like</Spacing>} */}
        </>
        // </StyledButton>
      )}
    </>
  );
};

export default Like;
