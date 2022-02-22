import handleViewport from 'react-in-viewport';


const Block = ({ inViewport, forwardedRef, children, ...rest }) => {

    const tempStyle = {
        opacity: inViewport&&1,
        transform: inViewport&&'translateY(0px)',
    }

    return (
        <menu className='price-list' ref={forwardedRef} style={tempStyle}>
            {children}
        </menu>
    );
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

const PricesContainer = ({children, ...rest}) => (
    <ViewportBlock {...rest}>{children}</ViewportBlock>
)


export default PricesContainer;