import React from 'react';
import { CarModel } from '../ModelsContext';
import useWrapperScroll from '../useWrapperScroll';
import { Container } from './styles';

interface Props {
  model: CarModel
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({model, children}) => {
  const { scrollY } = useWrapperScroll()

  const getSection
  
  return (
    <Container>
      {children}
    </Container>
  );
};

export default ModelOverlay;
