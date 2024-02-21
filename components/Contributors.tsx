'use client';

import React, { useEffect, useState } from 'react';

type ContributorsProps = {
    url: string,
};

type GithubUserObject = {
    login: string,
    avatar_url: string,
    html_url: string,
    contributions: string,
};

export default function Contributors(props: ContributorsProps) {
    const [contributors, setContributors] = useState<GithubUserObject[]>([]);

    const fetchContributors = async () => {
        try {
            const response = await fetch(`${props.url}/contributors`);
            if (response.ok) {
                setContributors(await response.json());
            } else {
                console.error('Failed to fetch contributors');
            }
        } catch (error) {
            console.error('Error fetching contributors:', error);
        }
    };

    useEffect(() => {
        fetchContributors();
    }, [props.url]);

    return (
        <div className='w-full mx-auto flex flex-col items-center'>
            <h1 className='my-10 text-2xl font-bold'>Stronka stworzona przez:</h1>

            <div className='w-full'>
                {contributors.map((contrib, idx) => (
                    <a href={contrib.html_url} target="_blank" key={idx}>
                        <div className="rounded overflow-hidden shadow-lg w-full flex justify-between p-4 items-center mb-3">
                            <div className="flex items-center  justify-between">
                                <img
                                    src={contrib.avatar_url}
                                    alt={contrib.login}
                                    className="w-16 h-16 rounded-full mr-4"
                                />
                                <h1 className="font-bold text-lg">{contrib.login}</h1>
                            </div>

                            <div className='flex items-center justify-evenly'>
                                <button className="gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-4 py-2 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 max-[500px]:hidden min-[500px]:flex">
                                    <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                    Github
                                </button>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
