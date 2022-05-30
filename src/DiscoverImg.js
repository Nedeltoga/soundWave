import DiscoverImgStyles from './DiscoverImgStyles.css'

function DiscoverImg() {
    return <img
    alt="A four pictures collage"
    src={process.env.PUBLIC_URL + '/images/covers.jpg'}
    width="300"
    />
}

export default DiscoverImg