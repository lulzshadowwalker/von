import 'package:flutter/material.dart';

class VonSingleChildScrollView extends StatelessWidget {
  const VonSingleChildScrollView({
    required this.child,
    this.physics,
    super.key,
  });

  final Widget child;
  final ScrollPhysics? physics;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) => ScrollConfiguration(
        behavior: ScrollConfiguration.of(context).copyWith(scrollbars: false),
        child: SingleChildScrollView(
          padding: EdgeInsets.zero,
          physics: physics,
          child: ConstrainedBox(
            constraints: BoxConstraints(
              minWidth: constraints.maxWidth,
              minHeight: constraints.maxHeight,
            ),
            child: IntrinsicHeight(
              child: child,
            ),
          ),
        ),
      ),
    );
  }
}
