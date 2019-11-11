import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";
import colors from "../../assets/colors";
import ListItem from "../../Components/ListItem";
import { connect } from "react-redux";
import ListEmptyComponent from "../../Components/ListEmptyComponent";

class BooksReadScreen extends React.Component {
  renderItem = item => {
    return <ListItem item={item} />;
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.books.isLoadingBooks && (
          <View
            style={{
              ...StyleSheet.absoluteFill,
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000
            }}
          >
            <ActivityIndicator size="large" color={colors.logoColor} />
          </View>
        )}
        <FlatList
          data={this.props.books.booksRead}
          renderItem={({ item }, index) => this.renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            !this.props.books.isLoadingBooks && (
              <ListEmptyComponent text="No Books Read" />
            )
          }
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(mapStateToProps)(BooksReadScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgMain
  },
  ListEmptyComponent: {
    marginTop: 50,
    alignItems: "center"
  },
  ListEmptyComponentText: {
    fontWeight: "bold"
  }
});
