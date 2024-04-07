import React from 'react';
import PropTypes from 'prop-types';

function ProviderProfile({ provider }) {
    const handleMoreInfoClick = () => {
        window.location.href = provider.website_link;
    };

    return (
    <div className="search-results">
        <div>
        <p>{provider.name}</p>
        <p>{provider.description}</p>
        <p>Ratings :{provider.rating}</p>
        <button type="submit" >Check Your Eligibity</button>
        <button type="submit" onClick={handleMoreInfoClick}>More Info</button>
        </div>
    </div>
    );
}
ProviderProfile.propTypes = {
    provider: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        rating: PropTypes.string, 
        website_link: PropTypes.string.isRequired 
    }).isRequired
};

export default ProviderProfile;
