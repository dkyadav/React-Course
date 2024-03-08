function SchoolDetails(props) {

    return (
        <table style={{border:"1px solid black"}}>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{props.detail.name}</td>
                </tr>
                <tr>
                    <td>Students</td>
                    <td>{props.detail.strength}</td>
                </tr>
                <tr>
                    <td>Rank</td>
                    <td>{props.detail.rank}</td>
                </tr>
            </tbody>
        </table>
    )
}

function School() {
    const si = [{
        name: "ABC School",
        strength: 2000,
        rank: 3
    }, {
        name: "XYZ School",
        strength: 1000,
        rank: 2
    }, {
        name: "TRW School",
        strength: 5000,
        rank: 1
    }]
    return (
        <div>
            <h3>School Information</h3>
            {si.map((elem, index) =>
                
                <SchoolDetails key={index} detail={elem} />
                
            )}

        </div>
    )
}

export default School;