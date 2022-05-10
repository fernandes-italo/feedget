import { useState } from 'react';
import bugImageUrl from '../../../assets/images/bug.svg';
import ideaImageUrl from '../../../assets/images/idea.svg';
import thoughtImageUrl from '../../../assets/images/thought.svg';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export const feedbackTypes = {
   BUG: {
      title: 'Problema',
      image: {
         source: bugImageUrl,
         alt: 'Imagem de um inseto',
      },
   },
   IDEA: {
      title: 'Ideia',
      image: {
         source: ideaImageUrl,
         alt: 'Imagem de uma lâmpada',
      },
   },
   OTHER: {
      title: 'Outro',
      image: {
         source: thoughtImageUrl,
         alt: 'Imagem de uma nuvem de pensamento',
      },
   },
};

export type FeedBackType = keyof typeof feedbackTypes;

export function WidgetForm() {
   const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null);
   const [feedbackSent, setFeedbackSent] = useState(false);

   const handleRestartFeedback = () => {
      setFeedbackSent(false);
      setFeedbackType(null);
   };

   return (
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
         {feedbackSent ? (
            <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
         ) : (
            <>
               {!feedbackType ? (
                  <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
               ) : (
                  <FeedbackContentStep
                     feedbackType={feedbackType}
                     onFeedbackRestartRequested={handleRestartFeedback}
                     onFeedbackSent={() => setFeedbackSent(true)}
                  />
               )}
            </>
         )}

         <footer className="text-xs text-neutral-400">Feito por rocketseat</footer>
      </div>
   );
}
