import SocialMedia from "../socialMedia";
import NavigationDots from "../navigationDots";

export default function AppWrap(Component: Function, idName: string) {
    return function HOC() {
        return (
            <div id={idName} className={"app-container"}>
                <SocialMedia />
                <div className="app-wrapper app-flex">
                    <Component />
                </div>
                <NavigationDots active={idName} />
            </div>
        );
    };
}
