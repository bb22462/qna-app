import * as React from 'react';

interface EmailTemplateProps {
    question: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
                                                                          question,
                                                                      }) => (
    <div>
        <h1 className={'text-3xl text-bold m-6'}>Новый Вопрос!</h1>
        <p className={'m-6'}>
            {question}
        </p>
    </div>
);
