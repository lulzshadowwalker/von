// ignoreforfile: publicmemberapidocs, sortconstructorsfirst
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:von/helpers/von_colors.dart';

class VonFormField extends StatelessWidget {
  const VonFormField({
    super.key,
    this.formFieldKey,
    this.initialValue,
    this.keyboardType,
    this.obscureText = false,
    this.validator,
    this.autocorrect = false,
    this.controller,
    this.maxLines = 1,
    this.hintText,
    this.label,
    this.labelText,
    this.prefixIcon,
    this.suffixIcon,
    this.inputFormatters,
    this.onSaved,
    this.onChanged,
    this.contentPadding,
    this.border,
    this.focusNode,
  });

  final String? initialValue;
  final TextInputType? keyboardType;
  final bool obscureText;
  final String? Function(String? value)? validator;
  final bool autocorrect;
  final TextEditingController? controller;
  final int? maxLines;
  final String? hintText;
  final Widget? label;
  final String? labelText;
  final Widget? prefixIcon;
  final Widget? suffixIcon;
  final List<TextInputFormatter>? inputFormatters;
  final void Function(String? value)? onSaved;
  final void Function(String)? onChanged;
  final EdgeInsets? contentPadding;
  final InputBorder? border;
  final FocusNode? focusNode;
  final Key? formFieldKey;

  static const _horizontalContentPaddingAmount = 12.0;

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      key: formFieldKey,
      focusNode: focusNode,
      controller: controller,
      autocorrect: autocorrect,
      inputFormatters: inputFormatters,
      initialValue: initialValue,
      cursorWidth: 4,
      cursorRadius: const Radius.circular(50),
      keyboardType: keyboardType,
      obscureText: obscureText,
      validator: validator,
      onSaved: onSaved,
      onChanged: onChanged,
      maxLines: maxLines,
      textAlignVertical: TextAlignVertical.center,
      decoration: InputDecoration(
        alignLabelWithHint: true,
        hintStyle: const TextStyle(
          color: VonColors.muted,
          fontSize: 17,
        ),
        contentPadding: contentPadding ??
            const EdgeInsets.symmetric(
              horizontal: _horizontalContentPaddingAmount,
              vertical: 18,
            ),
        hintText: hintText,
        label: label,
        labelText: labelText,
        prefixIcon: prefixIcon != null
            ? Padding(
                padding: const EdgeInsetsDirectional.only(
                  start: _horizontalContentPaddingAmount,
                  end: _horizontalContentPaddingAmount / 2,
                ),
                child: prefixIcon,
              )
            : null,
        suffixIcon: suffixIcon != null
            ? Padding(
                padding: const EdgeInsetsDirectional.only(
                  start: _horizontalContentPaddingAmount / 2,
                  end: _horizontalContentPaddingAmount,
                ),
                child: suffixIcon,
              )
            : null,
        border: border ??
            const OutlineInputBorder(
              borderRadius: BorderRadius.all(Radius.circular(12)),
              borderSide: BorderSide(color: VonColors.muted),
            ),
        enabledBorder: border ??
            const OutlineInputBorder(
              borderRadius: BorderRadius.all(Radius.circular(12)),
              borderSide: BorderSide(color: VonColors.muted),
            ),
        errorBorder: border ??
            const OutlineInputBorder(
              borderRadius: BorderRadius.all(Radius.circular(12)),
              borderSide: BorderSide(color: VonColors.red),
            ),
        focusedErrorBorder: border ??
            const OutlineInputBorder(
              borderRadius: BorderRadius.all(Radius.circular(12)),
              borderSide: BorderSide(color: VonColors.red),
            ),
      ),
    );
  }
}
