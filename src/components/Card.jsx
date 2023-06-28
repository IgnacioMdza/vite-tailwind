export default function Card (props) {
    return (
        <article className= 'flex flex-col bg-neutral-800 rounded-xl p-5 gap-3'>
            <div className='py-3'>
                <i className='p-3 bg-neutral-900 rounded-xl text-lg not-italic'>{props.icon}</i>
            </div>
            <h2 className='text-white text-base font-semibold'>{props.title}</h2>
            <p className='font-normal text-sm text-neutral-400'>{props.content}</p>
        </article>
    )
}
