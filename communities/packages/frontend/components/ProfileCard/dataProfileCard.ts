import icon1 from '../../public/community/ifyar.svg';
import profile from '../../public/community/profile/profile.svg';
import note from '../../public/profile/note-2.svg';
import Layer from '../../public/profile/layer.svg';
import briefcase from '../../public/profile/briefcase.svg';
import teacher from '../../public/profile/teacher.svg';
import people from '../../public/profile/people.svg';


interface ISettingProfile {
  avatar: string;
  titleProfile: string;
  descriptionProfile: string;
  titleButton: string;
}

export const initialSettingProfile: ISettingProfile[] = [
  {
    avatar: profile,
    titleProfile: "To get to know each other,",
    descriptionProfile: "Describe yourself in a few words and let us know what you're looking for",
    titleButton: 'Add About',
  },
  {
    avatar: note,
    titleProfile: "Have you attended any workshops?",
    descriptionProfile: "Enrich your profile with workshops you've already attended",
    titleButton: 'Add workshop',
  },
  {
    avatar: Layer,
    titleProfile: "Adding a skill to your profile",
    descriptionProfile: "Make yourself important by adding skills to your profile to enhance your experience",
    titleButton: 'Add expertise',
  },
  {
    avatar: briefcase,
    titleProfile: "Be sure to add Academic Training",
    descriptionProfile: "We recommend that you add a training course to your space to enhance your experience.",
    titleButton: 'Add Training',
  },
  {
    avatar: teacher,
    titleProfile: "Be sure to add a certification",
    descriptionProfile: "Enhance your profile with earned certifications ",
    titleButton: 'Add certification',
  },
  {
    avatar: people,
    titleProfile: "Join our Community",
    descriptionProfile: "Join our community for wonderful experience ",
    titleButton: 'Join community',
  }
];


//export const initialCategory: ['All','Data Analytics','Agro-Food Sciences','Microbiologist']