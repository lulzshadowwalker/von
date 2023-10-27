import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

/// e.g. "already have an account ? **Sign in**" where the second part
/// is interactable and has an accent color
class VonRichTextButton extends StatelessWidget {
  const VonRichTextButton({
    super.key,
    required this.text,
    required this.textCTA,
    required this.onTap,
    this.textAlign = TextAlign.center,
    this.color,
  });

  final String text;
  final String textCTA;
  final Color? color;
  final void Function() onTap;
  final TextAlign textAlign;

  @override
  Widget build(BuildContext context) {
    return RichText(
      textAlign: textAlign,
      text: TextSpan(
        style: Theme.of(context).textTheme.bodySmall,
        children: <TextSpan>[
          TextSpan(text: text),
          TextSpan(
            text: ' $textCTA',
            style: Theme.of(context).textTheme.bodySmall?.copyWith(
                  color: color ?? Theme.of(context).colorScheme.primary,
                ),
            recognizer: TapGestureRecognizer()..onTap = onTap,
          ),
        ],
      ),
    );
  }
}
