import { Text, View } from 'react-native';

import { HomeScreen } from './HomeScreen';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, children }: ScreenContentProps) => {
  return (
    <View className="h-full w-full">
      <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />
      <HomeScreen />
      {children}
    </View>
  );
};

const styles = {
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
