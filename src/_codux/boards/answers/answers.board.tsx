import { createBoard } from '@wixc3/react-board';
import Answers from '../../../components/Answers';

export default createBoard({
    name: 'Answers',
    Board: () => <Answers />,
    isSnippet: true,
});
