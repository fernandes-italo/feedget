import { SubmitFeedbackService } from './submit-feedback.service';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe('Submit feedback', () => {
   const submitFeedbackService = new SubmitFeedbackService({ create: createFeedbackSpy }, { sendMail: sendMailSpy });

   it('should be able to submit feedback', async () => {
      await expect(
         submitFeedbackService.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64',
         }),
      ).resolves.not.toThrow();

      expect(createFeedbackSpy).toHaveBeenCalled();
      expect(sendMailSpy).toHaveBeenCalled();
   });

   it('should not be able to submit feedback without type', async () => {
      await expect(
         submitFeedbackService.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64',
         }),
      ).rejects.toThrow();
   });

   it('should not be able to submit feedback without comment', async () => {
      await expect(
         submitFeedbackService.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64',
         }),
      ).rejects.toThrow();
   });

   it('should not be able to submit feedback with an invalid screenshot', async () => {
      await expect(
         submitFeedbackService.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'invalid format',
         }),
      ).rejects.toThrow();
   });
});
