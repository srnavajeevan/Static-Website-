
import React from 'react';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const WeatherWidget: React.FC = () => {
    // Mock data
    const weather = {
        location: "Central Valley, CA",
        temperature: "75°F",
        condition: "Sunny",
        wind: "5 mph",
        humidity: "40%",
        precipitation: "0%",
    };

    return (
        <div className="bg-background py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-text-dark mb-8">Today's Farm Forecast</h2>
                <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <SunIcon />
                        <div>
                            <p className="text-5xl font-bold text-text-dark">{weather.temperature}</p>
                            <p className="text-xl text-text-light">{weather.condition}</p>
                            <p className="text-lg font-medium text-text-dark mt-1">{weather.location}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-x-8 gap-y-4 text-center">
                        <div>
                            <p className="text-sm text-text-light">Wind</p>
                            <p className="text-lg font-semibold text-text-dark">{weather.wind}</p>
                        </div>
                        <div>
                            <p className="text-sm text-text-light">Humidity</p>
                            <p className="text-lg font-semibold text-text-dark">{weather.humidity}</p>
                        </div>
                        <div>
                            <p className="text-sm text-text-light">Precipitation</p>
                            <p className="text-lg font-semibold text-text-dark">{weather.precipitation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
