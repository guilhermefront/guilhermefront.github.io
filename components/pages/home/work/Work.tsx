import { Projects, Companies, Stack } from 'types';
import { WorkImage } from './WorkImage';
import { Icon } from 'components';
import Link from 'next/link';
import styles from './work.module.scss';
import classNames from 'classnames';

type Props = {
  title: Projects;
  company: Companies;
  role: string | string[];
  image: 'first';
  stack: Stack;
};

export const Work = ({ title, company, role, image, stack }: Props) => {
  return (
    <Link prefetch={false} href={`/projects/${title.toLowerCase()}`}>
      <a type="button" className={styles.work}>
        <div className={styles.work__info}>
          <h4 className={styles.work__company}>{company}</h4>
          <h3 className={styles.work__title}>{title}</h3>
          <p className={styles.work__roles}>
            {Array.isArray(role)
              ? role.reduce((acc, v) => acc + ', ' + v)
              : role}
          </p>
          <ul
            className={classNames(
              'mt-6 grid gap-4 grid-rows-3 grid-cols-3',
              styles.stack
            )}
          >
            {stack.map((tech) => (
              <Icon
                type="work"
                title={tech}
                key={tech}
                imgSize={15}
                size={28}
              />
            ))}
          </ul>
        </div>
        <WorkImage image={image} />
      </a>
    </Link>
  );
};
