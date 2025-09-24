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
// interfaces/index.ts

export interface CardProps {
  title: string;
  content: string;
  variant?: 'default' | 'outlined' | 'elevated';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  disabled?: boolean;
  className?: string;
  loading?: boolean;
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
