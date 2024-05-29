import React, { FC, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import PostCardPopover from './PostCardPopover';
import {
  Root,
  Image,
  TitleContainer,
  Title,
  Top,
  Author,
  Name,
  CreatedAt,
  LikeAndCommentsCount,
  LikeAndCommentButtons,
  StyledButton,
  Share,
  Comments,
} from './style';
import { Spacing, Avatar, Button, Link, Text } from '../../ui';
import { Comment, CommentCreate } from '../../Comment';
import { CommentIcon, PinnedIcon, ShareIcon } from '../../ui/icons';
import { RootState } from '../../../store';
import { Post, UserRole } from '../../../constants';
import { timeAgo } from '../../../utils';
import useClickOutside from '../../../utils/useClickOutside';
import PostCardShare from './PostCardShare';
import PostCreate from '../../PostCreate';
import Like from '../../Like';
import SeeMore from '../../SeeMore';
import Linkify from '../../Linkify';
import RepostIcon from '../../ui/icons/RepostIcon';
import { parseTextWithLinks } from '../../Comment/Comment/Comment';
import RepostCreate from '../../RepostCreate';
import axios from 'axios';
import { useQuery } from 'react-query';
import PostCard from '../PostCard';
const fetchPost = async ({ queryKey }) => {
  const [, postId] = queryKey;
  const { data } = await axios.get(`/posts/${postId}`);

  return data;
};
interface PostCardProps {
  post: Post;
  queryKey: any;
  displayChannelName?: boolean;
  isCommentsOpen?: boolean;
  refetch?: any;
  disableNavigation?: boolean;
}

const RepostCard: FC<PostCardProps> = ({
  post,
  queryKey,
  displayChannelName,
  isCommentsOpen,
  disableNavigation,
  refetch,
}) => {
  const authUser = useSelector((state: RootState) => state.auth.user);
  const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isPostCreateOpen, setIsPostCreateOpen] = useState(false);
  const [isReostCreateOpen, setIsRepostCreateOpen] = useState(false);
  const sharePopoverRef = useRef(null);
  const shareButtonRef = useRef(null);
  const [edit,setedit]=useState(false)
  useClickOutside([sharePopoverRef, shareButtonRef], isShareOpen, () => {
    toggleShare();
  });
console.log('post12654789====',post);
  const { data } = useQuery(['post', post.postId], fetchPost, { initialData: post });

  const likesLength = post.likes.length;
  const commentsLength = post.comments.length;
  const likes = likesLength > 0 ? likesLength + ' likes' : null;
  const comments = commentsLength > 0 ? commentsLength + ' comments' : null;
  const hasLiked = post.likes.find((post: any) => post.user === authUser?._id);

  const toggleShare = () => setIsShareOpen(!isShareOpen);

  const toggleCommentSection = () => setIsCommentSectionOpen(!isCommentSectionOpen);

  const showComments = isCommentSectionOpen || isCommentsOpen;

  const parsedText: any = <div dangerouslySetInnerHTML={{ __html: parseTextWithLinks(post.title) }} />;
  const postCardTitle = (
    <Title>
      <SeeMore>{parsedText}</SeeMore>
    </Title>
  );

  const postCardImage = <Image alt="post" src={post.image} />;

  return (
    <Root>
      {authUser && isPostCreateOpen && (
        <PostCreate
          isPostCreateOpen={isPostCreateOpen}
          closePostCreate={() => setIsPostCreateOpen(false)}
          postId={post._id}
          postTitle={post.title}
          postImage={post.image}
          postImagePublicId={post.imagePublicId}
          channelId={post.channel?._id}
          queryKey={queryKey}
        />
      )}

      {authUser && isReostCreateOpen && (
        <RepostCreate
          isPostCreateOpen={isReostCreateOpen}
          closePostCreate={() => setIsRepostCreateOpen(false)}
          postId={data._id}
          postImage={post.image}
          postImagePublicId={post.imagePublicId}
          channelId={post.channel?._id}
          queryKey={queryKey}
          post={data}
          isUpdate={edit}
          IdPost={post._id}
          postTitle={edit && post.title}
        />
      )}

      <Top>
        <Author>
          <Link disableBorderOnHover href={`/communities/profile/${post.author._id}`}>
            <Avatar image={post.author?.image} size={1.25} />
          </Link>

          <Spacing left="xs">
            <Link href={`/communities/profile/${post.author._id}`} color="text">
              <Name>{post.author.fullName} </Name>
            </Link>
            <CreatedAt>
              {post.pinned && (
                <>
                  <Text size="tiny" color="textSecondary">
                    <PinnedIcon /> Pinned &middot;
                  </Text>{' '}
                </>
              )}
              {timeAgo(post.createdAt)}
              {displayChannelName && (
                <>
                  {' '}
                  &middot;{' '}
                  <Link color="textSecondary" size="tiny" href={`/channel/${post.channel?.name}`}>
                    {post.channel?.name}
                  </Link>{' '}
                </>
              )}
            </CreatedAt>
          </Spacing>
        </Author>

        {(post.author._id === authUser?._id || authUser?.role === UserRole.SuperAdmin) && (
          <PostCardPopover
            queryKey={queryKey}
            postId={post._id}
            channelId={post.channel?._id}
            openPostCreate={() => {
              setedit(true)
              setIsRepostCreateOpen(true)
            }}
            imagePublicId={post.imagePublicId}
            pinned={post.pinned}
            refetch={refetch}
          />
        )}
      </Top>
      {post.title && (
        <>
          <TitleContainer>
            {disableNavigation ? (
              <Linkify> {postCardTitle}</Linkify>
            ) : (
              <Link color="text" href={`/communities/post/${post._id}`} disableBorderOnHover>
                {postCardTitle}
              </Link>
            )}
          </TitleContainer>
        </>
      )}
      {data &&
        (disableNavigation ? (
          <PostCard
            refetch={refetch}
            disableNavigation
            isCommentsOpen
            displayChannelName
            queryKey={['post', data._id]}
            post={data}
            isrepost={true}
          />
        ) : (
          <Link href={`/communities/post/${post.postId}`} disableBorderOnHover fullWidth block>
            <PostCard
              refetch={refetch}
              disableNavigation
              isCommentsOpen
              displayChannelName
              queryKey={['post', data._id]}
              post={data}
              isrepost={true}
            />
          </Link>
        ))}
      <LikeAndCommentsCount hadData={likes || comments}>
        {likes}
        <div />

        <Button ghost size="xs" onClick={isCommentsOpen ? null : toggleCommentSection}>
          {comments}
        </Button>
      </LikeAndCommentsCount>
      <LikeAndCommentButtons isCommentSectionOpen={isCommentSectionOpen}>
        <Like queryKey={queryKey} post={post} hasLiked={hasLiked} fullWidth withText />

        <StyledButton
          fullWidth
          radius="none"
          text
          size="xs"
          weight="bold"
          onClick={isCommentsOpen ? null : toggleCommentSection}
        >
          <CommentIcon />
          <Spacing left="xxs" /> Comment
        </StyledButton>

        <StyledButton
          fullWidth
          radius="none"
          text
          size="xs"
          weight="bold"
          onClick={() => {
             setedit(false);
             setIsRepostCreateOpen(true);
          }}
        >
          <RepostIcon />
          <Spacing left="xxs" /> Repost
        </StyledButton>

        <Share ref={shareButtonRef}>
          {isShareOpen && (
            <PostCardShare
              ref={sharePopoverRef}
              setIsShareOpen={setIsShareOpen}
              url={`${window.location.host}/communities/post/${post._id}`}
              title={post.title}
            />
          )}
          <StyledButton fullWidth radius="none" text size="xs" weight="bold" onClick={toggleShare}>
            <ShareIcon />
            <Spacing left="xxs" /> Share
          </StyledButton>
        </Share>
      </LikeAndCommentButtons>
      {showComments && (
        <Comments>
          <Spacing top="xs">
            {authUser && <CommentCreate queryKey={queryKey} autoFocus={isCommentSectionOpen} post={post} />}
          </Spacing>

          {post.comments.map((comment: any) => {
            // console.log(comment, "]]]]]]]]]]]]]]]]]]]]]]")
            if (!comment.parentComment) {
              return (
                <Comment key={comment._id} queryKey={queryKey} post={post} author={comment.author} comment={comment} />
              );
            }
          })}
        </Comments>
      )}
    </Root>
  );
};

export default RepostCard;
