const userGuide = {
    steps: [
        'Step 1: Open console to see the rendering logs.',
        'Step 2: Click either blue or green button to change the state of the parent component.',
        `Step 3: You will find that the normal child component is re-rendered every time the parent component is re-rendered, 
        while the memo child component only re-renders when its props 'name' value changes.`,
    ],
    links: [
        {
            title: 'Video Tutorial',
            url: 'https://youtu.be/YReX5CnU5xE?si=0QsFgCqg3Sns8tQ3',
        },
        {
            title: 'React.memo() Docs',
            url: 'https://react.dev/reference/react/memo',
        },
    ],
}

export default userGuide;