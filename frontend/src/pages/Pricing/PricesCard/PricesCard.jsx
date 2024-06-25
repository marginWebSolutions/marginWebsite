/* eslint-disable react/no-unescaped-entities */
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import ButtonOrLink from '../../../components/ButtonOrLink/ButtonOrLink';
import './PricesCard.scss';

export default function PricesCard({
	title,
	text,
	price,
	features,
	listTitle = "Ce qui est compris :",
	popular = false,
}) {
	return (
		<div className="card">
			{popular && <div className="card__popular">Populaire</div>}
			<div className="card__content">
				<div className="card__heading">
					<h2 className="card__heading--title">{title}</h2>
					<p className="card__heading--text">{text}</p>
				</div>
				<div className="card__body">
					<p className="card__body--price">{price}</p>
					<ButtonOrLink isLink={true} href="#features">
						Plus d'infos
					</ButtonOrLink>
					<div className="card__body__features">
						<p className="card__body__list--title">
							{listTitle}
						</p>
						<ul className="card__body__list">
							{features.map((feature, index) => (
								<li
									key={index}
									className="card__body__list--item"
								>
									<FontAwesomeIcon
										icon={faCheck}
										className="color-touch-svg"
									/>
									{feature}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

PricesCard.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	features: PropTypes.array.isRequired,
	listTitle: PropTypes.string,
	popular: PropTypes.bool,
};
