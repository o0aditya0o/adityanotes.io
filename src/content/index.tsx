import { ReactNode } from 'react';
import BorrowedGlasses from './BorrowedGlasses';
import TheHedgeChanges from './TheHedgeChanges';
import SolveForMotivation from './SolveForMotivation';
import ConfusionBeforeClarity from './ConfusionBeforeClarity';

export const postContent: Record<string, ReactNode> = {
    'borrowed-glasses-dont-fit': <BorrowedGlasses />,
    'the-hedge-changes': <TheHedgeChanges />,
    'solve-for-motivation': <SolveForMotivation />,
    'confusion-before-clarity': <ConfusionBeforeClarity />,
};
