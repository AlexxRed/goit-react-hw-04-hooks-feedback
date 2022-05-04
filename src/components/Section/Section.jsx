import PropTypes from 'prop-types';
import {SectionWrapper} from './Section.styled'

export default function Section({ title, children }) {
  
  return (
    <SectionWrapper >
      {title && <h2>{title}</h2>}
      {children}
    </SectionWrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

