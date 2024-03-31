export default function Task({ task }) {
    let { description, deadline } = task
    return (
        <div>
            <input type="checkbox" />
            <span>{description}</span>
            <span style={{ color: deadline > Date.now() ? 'red' : 'blue' }}>{deadline.getDate()}-{deadline.getMonth()}-{deadline.getYear()}</span>
        </div>
    )
}
