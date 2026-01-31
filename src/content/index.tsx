import { ReactNode } from 'react';
import BorrowedGlasses from './BorrowedGlasses';
import TheHedgeChanges from './TheHedgeChanges';
import SolveForMotivation from './SolveForMotivation';
import ConfusionBeforeClarity from './ConfusionBeforeClarity';
import SchoolOfLife from './SchoolOfLife';
import FourThousandWeeks from './FourThousandWeeks';
import StatQuestML from './StatQuestML';

export const postContent: Record<string, ReactNode> = {
    'borrowed-glasses-dont-fit': <BorrowedGlasses />,
    'the-hedge-changes': <TheHedgeChanges />,
    'solve-for-motivation': <SolveForMotivation />,
    'confusion-before-clarity': <ConfusionBeforeClarity />,
    'school-of-life': <SchoolOfLife />,
    'four-thousand-weeks': <FourThousandWeeks />,
    'statquest-ml-guide': <StatQuestML />,
};
