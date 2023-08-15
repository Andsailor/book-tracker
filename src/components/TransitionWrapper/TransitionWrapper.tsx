import { Transition } from "react-transition-group";

interface ITransitionWrapper {
    children: React.ReactNode;
    key: number;
}

const defaultStyle = {
    transition: `opacity 300ms ease-in-out`,
    opacity: 0,
};

const transitionStyles: { [key: string]: { opacity: number } } = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

function TransitionWrapper({ children, key }: ITransitionWrapper) {
    return (
        <Transition key={key} in={true} timeout={500} appear={true}>
            {(state) => (
                <div
                    className="mb-10"
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}
                >
                    {children}
                </div>
            )}
        </Transition>
    );
}

export default TransitionWrapper;
