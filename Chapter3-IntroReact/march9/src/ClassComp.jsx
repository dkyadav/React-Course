import React from "react";

// export default class ClassComp extends React.Component {
//     constructor(props)

//     render() {
//         return (
//             <h1>Main class component</h1>
//         )
//     }
// }

export class SubClassComp extends React.Component {

    render() {
        return (
            <h1>Main sub class component</h1>
        )
    }
}


export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    changeColor = () => {
        this.setState({ favoritecolor: "blue" });
    }
    render() {
        // {console.log('here123')}
        return (
            <h1>test class Component</h1>
        )
    }
}

// export class SubClassComponent extends React.Component {
//     render() {
//         return (
//             <h1>test sub-class Component</h1>
//         )
//     }
// }

