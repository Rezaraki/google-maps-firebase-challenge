# Bearer Challenge

Bearer Challenge is a demo of a platform that functions like Uber, but for items like boxes and envelopes. This application provides a comprehensive solution for users to find addresses, view them on the map, and get parcel information with pricing details.

## Features

- **Google Places Autocomplete API**: The application suggests user addresses based on typed inputs, leveraging the Google Places Autocomplete API.

- **Google Maps SDK**: The selected address is displayed on the map using the Google Maps SDK and a wrapper React library.

- **Address Display**: Both the origin and destination addresses are shown on the map.

- **Map Interaction**: The map brings both the origin and destination into view, draws a line between them, and locks the map from zooming, moving, or any other changes.

- **Firebase Connection**: The app connects to Firebase to retrieve parcel type data.

- **Firestore Integration**: Parcel images are downloaded from Firestore.

- **Pricing Function**: A pricing function is called with data gathered from Firebase functions. This shows the user the available transport options, estimated time, and price from the returned data.

Please note that this is a high-level overview of the application's functionality. For more detailed information about each feature, please refer to the source code and comments within.
