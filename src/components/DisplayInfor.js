import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { name, age } = this.props;

        return (
            // destructuring array/obj
            // props: properties

            <div>
                <div>
                    My Name's {name}
                </div>
                <div>
                    My Age's {age}
                </div>
            </div>
        )
    }
}
export default DisplayInfor;