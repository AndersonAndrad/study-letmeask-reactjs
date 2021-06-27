// dependencies
import { ReactNode } from "react";
import cx from 'classnames'

// styles
import '../../styles/question.scss'

interface IQuestion{
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export default function Question({ content, author, children, isAnswered, isHighlighted }: IQuestion){
  return (
    <div className={cx('question', { answered: isAnswered }, { highlighted: isHighlighted && !isAnswered})}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  )
}

// TODO: video stop in 56:17