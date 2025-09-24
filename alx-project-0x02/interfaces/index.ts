export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CardProps {
  title: string;
  content: string;
  variant?: 'default' | 'outlined' | 'elevated';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}
export interface CardProps {
  title: string;
  content: string;
  variant?: 'default' | 'outlined' | 'elevated';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  author: string;
}

export interface PostFormData {
  title: string;
  content: string;
}
export interface UserProps {
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
