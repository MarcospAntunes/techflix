import videos from '../../json/db.json'

export const videosFront = videos.filter((videos) => {
    return videos.categoria === 'Front-end'
})
export const videosBack = videos.filter((videos) => {
    return videos.categoria === 'Back-end'
})
export const videosMobile = videos.filter((videos) => {
    return videos.categoria === 'Mobile'
})
export const videosGame = videos.filter((videos) => {
    return videos.categoria === 'Game Development'
})
export const videosDataBase = videos.filter((videos) => {
    return videos.categoria === 'Database'
})

export default videos








