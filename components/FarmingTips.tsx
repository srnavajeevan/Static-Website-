
import React, { useState, FormEvent } from 'react';
import { getFarmingTip } from '../services/geminiService';
import { FarmingTip } from '../types';

const LoadingSpinner: React.FC = () => (
    <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary" style={{ animationDelay: '0.4s' }}></div>
    </div>
);

const TipResult: React.FC<{ tip: FarmingTip }> = ({ tip }) => (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md border-l-4 border-primary animate-fade-in-up">
        <h3 className="text-2xl font-bold text-text-dark">{tip.title}</h3>
        <p className="mt-2 text-text-light">{tip.introduction}</p>
        <ul className="mt-4 space-y-2 list-disc list-inside">
            {tip.steps.map((step, index) => (
                <li key={index} className="text-text-dark">{step}</li>
            ))}
        </ul>
    </div>
);

const FarmingTips: React.FC = () => {
    const [topic, setTopic] = useState('');
    const [tip, setTip] = useState<FarmingTip | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!topic.trim()) return;

        setIsLoading(true);
        setError(null);
        setTip(null);

        try {
            const result = await getFarmingTip(topic);
            if (result) {
                setTip(result);
            } else {
                setError('Could not retrieve a tip. Please try a different topic.');
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again later.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold text-center text-text-dark mb-2">AI-Powered Farming Tips</h2>
                <p className="text-center text-text-light mb-8">
                    Ask our AI assistant for tips on any farming topic, from soil health to crop rotation.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., 'How to grow organic tomatoes' or 'Best irrigation for corn'"
                        className="flex-grow w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-md shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !topic.trim()}
                        className="flex justify-center items-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
                    >
                        {isLoading ? <LoadingSpinner /> : 'Get Tip'}
                    </button>
                </form>

                {error && <div className="mt-6 text-center text-red-600 bg-red-100 p-3 rounded-md">{error}</div>}
                {tip && <TipResult tip={tip} />}
            </div>
        </div>
    );
};

export default FarmingTips;
