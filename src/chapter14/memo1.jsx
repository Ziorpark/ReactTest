import React from "react"
import Toolbar from "../chapter09/toolbar";

// Context는 데이터를 매번 컴포넌트를 통해 전달할 필요없이 컴포넌트 트리로 곧바로 전달하게 해줍니다.
// 여기에서는 현재 테마를 위한 Context를 생성하며, 기본값은 'light'입니다.
const ThemeContext = React.createContext('light');

// Provider를 사용하여 하위 컴포넌트에게 현제 테마 데이터를 전달
// 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 깊이 있는지에 관계없이 데이터를 읽을 수 있습니다.
// 여기에서는 현재 테마값으로 'dark'를 전달하고 있습니다.
function App(props) {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

// 이제 중간에 위치한 컴포넌트는 테마 데이터를 하위 컴포넌트로 전달할 필요가 없습니다.
function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton(props) {
    // 리액트는 가장 가까운 상위 테마 Provider를 찾아서 해당되는 값을 사용합니다.
    // 만약 해당되는 Provider가 없을 경우 기본값(여기에서는 'light')을 사용합니다.
    // 여기에서는 상위 Provider가 있기 때문에 현재 테마의 값은 'dark'가 됩니다.
    return (
        <ThemeContext.Consumer>
            {value => <Button theme={value} />}
        </ThemeContext.Consumer>
    )
}

function Page(props) {
    const user = props.user;

    const userLink = (
        <Link href={user.permalink}>
            <Avatar user={user} size={props.avatarSize} />
        </Link>
    );

    // Page 컴포넌트는 PageLayout 컴포넌트를 랜더링
    // 이때 props로 userLick를 함께 전달함.
    return <PageLayout userLink={userLink} />;
}

/*
// PageLayout 컴포넌트는 NavigationBar 컴포넌트를 랜더링
<PageLayout userLink={...} />

// NavigationBar 컴포넌트는 props로 전달받은 userLink element를 리턴
<NavigationBar userLink={...} />
*/

function Page2(props) {
    const user = props.user;

    const topBar = (
        <NavigationBar>
            <Link href={user.permalink}>
                <Avatar user={user} size={props.avatarSize} />
            </Link>
        </NavigationBar>
    );

    const content = <Feed user={user} />;

    return (
        <PageLayout 
            topBar = {topBar}
            content = {content}
        />
    );
}
