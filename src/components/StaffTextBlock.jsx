import handleViewport from 'react-in-viewport';

const TextBlock = (props) => {
    const { inViewport, forwardedRef } = props;

    const tempStyle = {
        opacity: inViewport&&1,
        transform: inViewport&&'translateY(0px)',
    }

    return (
        <div className='text-container' style={tempStyle} ref={forwardedRef}>
            <h2>WE ARE HERE TO GUIDE YOU</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum recusandae cum quam consequuntur enim quo ad adipisci mollitia quaerat ullam, ea quis nihil dolore dolorum doloremque.
            </p>
        </div>
    );
};

const ViewportBlock = handleViewport(TextBlock, /** options: {}, config: {} **/);

const StaffTextBlock = (props) => (
    <ViewportBlock/>
)


export default StaffTextBlock;