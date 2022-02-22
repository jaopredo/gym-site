import handleViewport from 'react-in-viewport';

const TextBlock = (props) => {
    const { inViewport, forwardedRef } = props;

    const tempStyle = {
        opacity: inViewport&&1,
        transform: inViewport&&'translateY(0px)',
    }

    return (
        <div className='text-container' ref={forwardedRef} style={tempStyle}>
            <h2>YOUR BODY IS<br/>A WORK OF ART</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe temporibus cum veniam tempore sint consequatur animi deleniti delectus! Vitae eligendi, est eveniet aliquid asperiores labore optio natus. Mollitia, consequuntur id.
            </p>
            <a href="#">LER MAIS</a>
        </div>
    );
};

const ViewportBlock = handleViewport(TextBlock, /** options: {}, config: {} **/);

const IncentivoTextBlock = () => <ViewportBlock/>


export default IncentivoTextBlock;