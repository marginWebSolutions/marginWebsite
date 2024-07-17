import PropTypes from 'prop-types';

export const FIELD_TYPES = {
	INPUT_TEXT: 1,
	INPUT_EMAIL: 2,
	TEXTAREA: 3,
	INPUT_PASSWORD: 4,
};

// Input Components
const TextInput = ({
	name,
	value,
	handleChange,
	placeholder,
	required,
	...props
}) => (
	<input
		type="text"
		{...{
			name,
			value,
			onChange: handleChange,
			placeholder,
			required,
			...props,
		}}
	/>
);

const EmailInput = ({
	name,
	value,
	handleChange,
	placeholder,
	required,
	...props
}) => (
	<input
		type="email"
		{...{
			name,
			value,
			onChange: handleChange,
			placeholder,
			required,
			...props,
		}}
	/>
);

const TextArea = ({
	name,
	value,
	handleChange,
	placeholder,
	required,
	...props
}) => (
	<textarea
		{...{
			name,
			value,
			onChange: handleChange,
			placeholder,
			required,
			...props,
		}}
	/>
);

// Factory Function
const FieldFactory = ({ type, ...props }) => {
	switch (type) {
		case FIELD_TYPES.INPUT_TEXT:
			return <TextInput {...props} />;
		case FIELD_TYPES.INPUT_EMAIL:
			return <EmailInput {...props} />;
		case FIELD_TYPES.TEXTAREA:
			return <TextArea {...props} />;
		default:
			return <TextInput {...props} />;
	}
};

export default function Field({
	label,
	name,
	type = FIELD_TYPES.INPUT_TEXT,
	...props
}) {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<FieldFactory type={type} name={name} {...props} />
		</>
	);
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	handleChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
};

EmailInput.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	handleChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
};

TextArea.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	handleChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
};

FieldFactory.propTypes = {
	type: PropTypes.oneOf(Object.values(FIELD_TYPES)).isRequired,
};

Field.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
};
