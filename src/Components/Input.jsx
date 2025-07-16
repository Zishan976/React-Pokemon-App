
export const Input = (props) => {

    return (
        <div className="input-class">
            <input
                type="text"
                placeholder="Search Pokemon"
                name="pokemon"
                value={props.value}
                onChange={props.onChange}

            />
        </div>
    )
}