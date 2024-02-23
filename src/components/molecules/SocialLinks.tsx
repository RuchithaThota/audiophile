
function SocialLinks(): JSX.Element {
    interface Social {
        id: number,
        img: string,
        name: string
    }
    const socials: Social[] =
        [{ id: 1, img: "/images/shared/desktop/icon-facebook.svg", name: 'facebookIcon' },
        { id: 2, img: '/images/shared/desktop/icon-twitter.svg', name: 'xIcon' },
        { id: 3, img: '/images/shared/desktop/icon-instagram.svg', name: 'instaIcon' }]
    //JSX
    return (
        <>
            {socials.map((social): JSX.Element =>
                <img src={social.img} alt={social.name} key={social.id}
                    loading="lazy" className="cursor-pointer" />
            )}
        </>
    )
}

export default SocialLinks