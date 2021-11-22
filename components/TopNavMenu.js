import PropTypes from 'prop-types';
import styled from "styled-components";


const TopNavMenu = ({ menus }) => {

    return (
        <TopNavMenuWrapNav>
            {menus.map((item, index) => {
                const key = index.toString();
                return(
                    <div key={key}>{index}</div>
                )
            })}
        
            <button type="button">
                <span>BUTTON</span>
            </button>
        </TopNavMenuWrapNav>
    );
};

export default TopNavMenu;

TopNavMenu.propTypes = {
    menus: PropTypes.array,
}
TopNavMenu.defaultProps = {
    menus: [1,2,3,4,5,6,7,8],
}

const TopNavMenuWrapNav = styled.div`
background-color: beige;
`;
