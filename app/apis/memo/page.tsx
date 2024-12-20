'use client';

import React, { useState } from 'react';
import MemoUsageGuideSection from "@/app/_components/UsageGuideSection";
import UsageGuide from "@/app/apis/memo/data";


const NormalChild = ({ name }: { name: string }) => {
    console.log('normal child is rendering');
    
    return (
        <div className="p-4 border rounded bg-gray-100">
            <p>Normal child, props value is: {name}</p>
        </div>
    );
};

const child = ({ name }: { name: string }) => {
    console.log('memo child is rendering');

    return (
        <div className="p-4 border rounded bg-gray-100">
            <p>Memo child, props value is: {name}</p>
        </div>
    );
}

// use memo
const MemoChild = React.memo(child);

export default function Parent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('David');

    console.log('parent component');

    return (
        <div>
            <div className="w-full max-w-xs mx-auto mt-8 flex flex-col space-y-4">
                <button
                    onClick={() => setCount(c => c + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    {count}
                </button>
                <button
                    onClick={() => setName(name === 'David' ? 'Jack' : 'David')}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                >
                    {name}
                </button>
                <NormalChild name={name} />
                <MemoChild name={name} />
            </div>


            {/*remove the following code, this is for the usage guide section*/}
            <MemoUsageGuideSection steps={UsageGuide.steps} links={UsageGuide.links} />
        </div>
    );
}
