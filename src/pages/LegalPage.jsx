import React from 'react';
import { useParams } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout';
import { legalContent } from '../data/legal';

const LegalPage = () => {
    const { policyType } = useParams();
    const policy = legalContent[policyType];

    if (!policy) {
        return (
            <div className="pt-32 text-center h-screen">
                <h1 className="text-2xl font-bold">Policy Not Found</h1>
            </div>
        );
    }

    return (
        <LegalLayout title={policy.title}>
            {policy.content}
        </LegalLayout>
    );
};

export default LegalPage;
