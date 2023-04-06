import React from 'react';


function UserProfile(props) {
    return (
        <div>
            <img src="https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/277247487_2456437561156990_2926814411132325054_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=H376CGxVH6cAX9rXLLz&_nc_ht=scontent.ftun10-1.fna&oh=00_AfBw-Cu8tmgIg2RMESEOndw88WGRBd0GODPVFGgCcGW5Gg&oe=64344E49"
                alt={UserProfile.oussema}
                width={200}
                height={200}
                className="profile-photo"
                style={{borderRadius: '50%', marginTop: '40px' } // profilePhotoStyle object
                }/>
        </div>
    );
}

export default UserProfile;
