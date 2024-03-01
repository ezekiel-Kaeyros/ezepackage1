import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.colors.general.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid ${(p) => p.theme.colors.border.main};
`;

export const Container = styled.div`
  margin-right: ${(p) => p.theme.spacing.xxs};
  margin-left: ${(p) => p.theme.spacing.sm};
  padding: ${(p) => p.theme.spacing.xxs} ${(p) => p.theme.spacing.xxs};
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(p) => p.theme.colors.general.textSecondary};
`;
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #A3ADBB;
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
`;

export const FullName = styled.div`
  padding-left: ${(p) => p.theme.spacing.sm};
  font-size: ${(p) => p.theme.font.size.sm};
  color: ${(p) => p.theme.colors.general.text};
  font-weight: ${(p) => p.theme.font.weight.bold};
`;

export const FullName2 = styled.div`
  padding-left: 40px;
  font-size: ${(p) => p.theme.font.size.sm};
  color: #000000;
  position: relative;
  top: 25px;
`;

export const ReceiverName = styled.span`
  position: absolute;
  right: 101px;
  top: 28px;
  font-size: ${(p) => p.theme.font.size.sm};
`

export const ScrollWrapper = styled.div`
  height: 100vh;
  margin-top: -120px;
  padding-top: 170px;
  overflow: hidden;
`;

export const MessagesConversation = styled.div`
  padding: 0 ${(p) => p.theme.spacing.sm};
  overflow-y: auto;
  height: 100%;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colors.grey[90]};
    border-radius: ${(p) => p.theme.radius.lg};
    visibility: hidden;

    &:hover {
      background-color: ${(p) => p.theme.colors.grey[80]};
    }
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      visibility: visible;
    }
  }
`;

export const Conversation = styled.div`
  flex: 1;
`;

interface UserMessageProps {
  isSender: boolean;
}

export const MessageDate = styled.span<UserMessageProps>`
  position: absolute;
  bottom: -43px;
  left: ${(p) => !p.isSender && p.theme.spacing.lg2};
  right: -${(p) => p.isSender && 0};
  display: none;
  font-size: ${(p) => p.theme.font.size.tiny};
  color: ${(p) => p.theme.colors.general.text};
`;

export const MessageDate2 = styled.div`
padding-left: 40px;
font-size: ${(p) => p.theme.font.size.sm};
color: #000000;
position: relative;
top: 25px;
`;

export const MessageWrapper = styled.div<UserMessageProps>`
  display: flex;
  position: relative;
  justify-content: ${(p) => p.isSender && 'flex-end'};  
  margin: 45px 0px 45px 0px;
  &:hover ${MessageDate} {
    display: block;
  }
`;

export const Message = styled.div<UserMessageProps>`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 50px;
    right: 96px;
  max-width: 300px;
  line-height: 17px;
  font-size: ${(p) => p.theme.font.size.xxs};
  padding: 5px 40px 5px 12px;
  border-radius: ${(p) => p.theme.radius.md};
  color: ${(p) => p.isSender && p.theme.colors.general.white};
  background-color: ${(p) => (p.isSender ? p.theme.colors.general.primary2 : p.theme.colors.grey[11])};
`;

export const SpanMessage = styled.span`
overflow-wrap: break-word;
inline-size: 280px;
`;

export const Form = styled.form`
  background-color: ${(p) => p.theme.colors.general.white};
  position: relative;
  bottom: 3px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: ${(p) => p.theme.spacing.xxs};


  
`;

export const Textarea = styled.textarea`
  height: 52px;
  border-radius: ${(p) => p.theme.radius.md};
  background-color: ${(p) => p.theme.colors.grey[10]};
  width: 100%;
  outline: 0;
  resize: none;
  border: 0;
  padding-left: 47px;
  padding-top: 16px;
  color: ${(p) => p.theme.colors.general.text};
  font-size: ${(p) => p.theme.font.size.xs};

  &::placeholder {
    color: ${(p) => p.theme.colors.general.textSecondary};
  }
`;

export const Container3 = styled.div`
  position: absolute;
  bottom: 10px;
  right: 30px;
  display: flex;
  gap: 8px;
 
`;

export const CircleAttach = styled.div`
  position: absolute;
  bottom: 15px;
  left: 22px;
`

export const Container4 = styled.div`
  background-color: #D9E8E4;
  padding: 8px 13px 8px 13px;
  border-radius: 40px;
 
`;

export const SendButton = styled.span`
  color: #1D242D;
  font-weight: 700;
  margin-right: 4px;
`
