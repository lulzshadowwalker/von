import 'package:go_router/go_router.dart';
import 'package:von/views/home/home.dart';

class VonRouter {
  static const String home = '/';

  static final config = GoRouter(routes: [
    GoRoute(
      path: home,
      builder: (context, state) => const Home(),
    )
  ]);
}
