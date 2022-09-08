import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {

    //console.log(props);
    

    return (
        <>
            <h1>{ title }</h1>
            { /*JSON.stringify( newMessage ) */}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Jessica Pozo'
}