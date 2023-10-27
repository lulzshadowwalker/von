import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:von/helpers/von_extensions.dart';

class VonBackButton extends StatelessWidget {
  const VonBackButton({super.key});

  @override
  Widget build(BuildContext context) {
    return (Navigator.maybeOf(context)?.canPop() ?? false)
        ? Container(
            width: 48,
            height: 48,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(8),
              border: Border.all(
                color: context.cs.onPrimaryContainer,
              ),
            ),
            clipBehavior: Clip.antiAliasWithSaveLayer,
            child: InkWell(
              onTap: () {
                Navigator.of(context).pop();
              },
              child: Transform.flip(
                flipX: context.directionality == TextDirection.rtl,
                child: const Icon(
                  FontAwesomeIcons.angleLeft,
                ),
              ),
            ),
          )
        : const SizedBox.shrink();
  }
}
