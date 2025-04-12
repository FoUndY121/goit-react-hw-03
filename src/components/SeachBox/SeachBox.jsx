const SearchBox = ({ value, onChange }) => {
    return (
        <div>
            <label>Find contacts by name:</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBox;