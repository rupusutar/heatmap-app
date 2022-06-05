import Months from '../components/Months';
import { render} from '@testing-library/react';
import {months} from '../util/util';

test('renders all 12 months on UI', () => {
  const {getByText} = render(<Months />);
  months.forEach(month =>
    expect(getByText(month)).toBeInTheDocument());
})