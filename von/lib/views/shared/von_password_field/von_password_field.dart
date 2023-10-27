import 'package:enefty_icons/enefty_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:von/l10n/l10n_imports.dart';
import 'package:von/views/shared/von_form_field/von_form_field.dart';

import '../../../helpers/von_extensions.dart';

class VonPasswordField extends HookConsumerWidget {
  const VonPasswordField({
    this.hintText,
    this.onSaved,
    this.validator,
    Key? key,
  }) : super(key: key);

  final String? hintText;
  final void Function(String? value)? onSaved;
  final String? Function(String? value)? validator;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final isPassObscure = useState(true);
    bool isObscure = isPassObscure.value;

    return VonFormField(
      validator: validator ??
          (val) => val.length >= 8 ? null : VL.of(context).pickStrongPassword,
      onSaved: onSaved,
      prefixIcon: const Icon(
        EneftyIcons.lock_outline,
      ),
      hintText: hintText ?? context.vl.password,
      obscureText: isObscure,
      suffixIcon: IconButton(
        highlightColor: Colors.transparent,
        icon: Icon(
          isPassObscure.value
              ? EneftyIcons.eye_slash_outline
              : EneftyIcons.eye_outline,
        ),
        onPressed: () => isPassObscure.value = !isObscure,
      ),
    );
  }
}
